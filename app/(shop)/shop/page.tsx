import BackLink from "@/shared/components/BackLink";
import Button from "@/shared/components/ui/Button";
import { Template } from "@/shared/types/template";
import { urlFor } from "@/shared/utils/sanityClient";
import Image from "next/image";
import Link from "next/link";
//Icons
import { FaArrowLeft } from "react-icons/fa";

export default async function Page() {
  const response = await fetch("http://localhost:5245/api/templates");
  const data = await response.json();
  const templates: { result: Template[] } = data;

  console.log(templates);

  return (
    <div className="page">
      <BackLink text="Browse templates" icon={<FaArrowLeft />} />

      <div className="flex flex-wrap gap-4">
        {templates.result.map((template) => {
          return (
            <div
              key={template._id}
              className="flex flex-col items-center gap-2 p-4 rounded-lg bg-gray-900"
            >
              <Image
                src={urlFor(template.image || "").toString()}
                alt={template.name}
                width={300}
                height={300}
              />
              <h2 className="text-lg font-bold">{template.name}</h2>
              <p>{template.description}</p>
              <div className="flex gap-2">
                <Link href={`/shop/${template.slug.current}`}>
                  <Button text="View Template" variant="primary" size="small" />
                </Link>
                <Button text="Buy now" variant="secondary" size="small" />
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
