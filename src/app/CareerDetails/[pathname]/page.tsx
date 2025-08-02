import CareerContent from "@/components/careerContentcComp/CareerContent";
import { Careers } from "@/constants/careerdetailsconst";

export default async function page({
  params,
}: {
  params: { pathname: string };
}) {
  const { pathname } = await params;
  const res = Careers.find((val) => val.pathName === pathname);
  return (
    <>
      {res ? (
        <CareerContent>
          <CareerContent.Title>{res.title}</CareerContent.Title>
          <CareerContent.CareerImg src={res.src} alt={res.alt} />
          <CareerContent.Description>
            {res.description}
          </CareerContent.Description>
        </CareerContent>
      ) : (
        <div>404</div>
      )}
    </>
  );
}
