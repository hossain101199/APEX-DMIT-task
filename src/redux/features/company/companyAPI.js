import { API } from "../../api/apiSlice";

const companyAPI = API.injectEndpoints({
  endpoints: (builder) => ({
    getAllCompany: builder.query({
      query: ({ page = 1, company_name = "", company_status = "" }) => {
        return {
          url: `/public/api/get-all-companys?page=${page}&company_name=${company_name}&company_status=${company_status}`,
        };
      },
    }),
  }),
});

export const { useGetAllCompanyQuery } = companyAPI;
