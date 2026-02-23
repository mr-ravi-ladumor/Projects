import { Section, SparklesIcon } from "lucide-react"
import SectionHeader from "@/components/common/section-header"
import ProductSubmitForm from "@/components/products/product-submit-form"

export default function SubmitPage() {
  return (
    <section className="py-20">

      <div className="wrapper">
       <div className="mb-12">
         <SectionHeader
          title="Submit Your Product"
          description="Share your innovative products with our community by submitting them here."
          icon={SparklesIcon}
        />
       </div>
        <div className="max-w-2xl mt-auto">
          <ProductSubmitForm/>
        </div>
      </div>
    </section>
  )
}
