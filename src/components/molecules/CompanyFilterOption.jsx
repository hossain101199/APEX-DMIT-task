import { setCompanyFilterParams } from "@/redux/features/company/companySlice";
import debounce from "@/utils/debounce";
import { useDispatch, useSelector } from "react-redux";
import SearchInputField from "../atoms/SearchInputField";
import SelectInputField from "../atoms/SelectInputField";

const CompanyFilterOption = () => {
  const filteredData = useSelector((state) => state.companyFilterParams);
  const dispatch = useDispatch();

  const handleFilterChange = debounce((e, key) => {
    dispatch(
      setCompanyFilterParams({
        ...filteredData,
        page: 1,
        [key]: e.target.value,
      })
    );
  }, 500);

  return (
    <div className="grid sm:grid-cols-2 gap-5">
      <SelectInputField
        placeholder="Filter by status"
        options={[
          { value: "1", title: "1" },
          { value: "2", title: "2" },
          { value: "3", title: "3" },
        ]}
        onChange={(e) => handleFilterChange(e, "status")}
      />

      <SearchInputField
        placeholder="Filter by company name"
        onChange={(e) => handleFilterChange(e, "companyName")}
      />
    </div>
  );
};

export default CompanyFilterOption;
