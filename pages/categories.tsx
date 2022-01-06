import Category from '@/components/Category'
import Link from '@/components/Link'
import { PageSEO } from '@/components/SEO'
import siteMetadata from '@/data/siteMetadata'
import { getAllCategories } from '@/lib/category'
import kebabCase from '@/lib/utils/kebabCase'
import { GetStaticProps, InferGetStaticPropsType } from 'next'

export const getStaticProps: GetStaticProps<{ categories: Record<string, number> }> = async () => {
  const categories = await getAllCategories('blog')

  return { props: { categories } }
}

export default function Categories({ categories }: InferGetStaticPropsType<typeof getStaticProps>) {
  const sortedCategories = Object.keys(categories).sort((a, b) => categories[b] - categories[a])
  return (
    <>
      <PageSEO title={`Categories - ${siteMetadata.author}`} description="Things I blog about" />
      <div className="flex flex-col items-start justify-start divide-y divide-gray-200 dark:divide-gray-700 md:justify-center md:items-center md:divide-y-0 md:flex-row md:space-x-6 md:mt-24">
        <div className="pt-6 pb-8 space-x-2 md:space-y-5">
          <h1 className="text-3xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-6xl md:leading-14 md:border-r-2 md:px-6">
            Categories
          </h1>
        </div>
        <div className="flex flex-wrap max-w-lg">
          {Object.keys(categories).length === 0 && 'No categories found.'}
          {sortedCategories.map((c) => {
            return (
              <div key={c} className="mt-2 mb-2 mr-5">
                <Category text={c} />
                <Link
                  href={`/category/${kebabCase(c)}`}
                  className="-ml-2 text-sm font-semibold text-gray-600 uppercase dark:text-gray-300"
                >
                  {` (${categories[c]})`}
                </Link>
              </div>
            )
          })}
        </div>
      </div>
    </>
  )
}
