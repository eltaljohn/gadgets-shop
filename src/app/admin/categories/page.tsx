import { getCategoriesWithProducts } from "@/actions/categories"
import CategoriesPageComponent from "@/app/admin/categories/page-component"

export default async function Categories() {
  const categories = await getCategoriesWithProducts()

  return <CategoriesPageComponent categories={categories} />
}