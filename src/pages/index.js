import Container from "@/components/atoms/Container";
import Error from "@/components/atoms/Error";
import Spinner from "@/components/atoms/Spinner";
import TableRow from "@/components/atoms/TableRow";
import CompanyFilterOption from "@/components/molecules/CompanyFilterOption";
import PaginationElement from "@/components/molecules/PaginationElement";
import Table from "@/components/molecules/Table";
import Navbar from "@/layouts/Navbar";
import { useGetAllCompanyQuery } from "@/redux/features/company/companyAPI";
import { useSelector } from "react-redux";

const Home = () => {
  const { page, companyName, status } = useSelector(
    (state) => state.companyFilterParams
  );

  const {
    data: { companys } = {},
    isLoading,
    error,
  } = useGetAllCompanyQuery({
    page,
    company_name: companyName,
    company_status: status,
  });

  return (
    <Container className="min-h-screen flex flex-col gap-5">
      <Navbar />
      {isLoading ? (
        <Spinner />
      ) : error ? (
        <Error error={"Something went wrong"} />
      ) : (
        <>
          <CompanyFilterOption />

          <Table
            columnTitles={[
              "company name",
              "company phone",
              "address 1",
              "city",
              "status",
            ]}
          >
            {companys?.data?.map((company) => (
              <TableRow
                key={company.id}
                CellData={[
                  company.company_name,
                  company.company_phone,
                  company.address1,
                  company.city,
                  company.company_status,
                ]}
              />
            ))}
          </Table>

          {companys?.data?.length < 1 && (
            <p className="font-semibold px-6 py-3 text-center text-red-600">
              Data Not Available
            </p>
          )}

          <PaginationElement data={companys} isLoading={isLoading} />
        </>
      )}
    </Container>
  );
};

export default Home;
