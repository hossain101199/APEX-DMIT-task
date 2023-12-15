import { setCompanyFilterParams } from "@/redux/features/company/companySlice";
import { useMemo } from "react";
import { useDispatch, useSelector } from "react-redux";
import PaginationButton from "../atoms/PaginationButton";

const PaginationElement = ({ data, isLoading }) => {
  const { page } = useSelector((state) => state.companyFilterParams);

  const dispatch = useDispatch();

  const { from, to, total, current_page, last_page } = data || {};

  const pageNumbers = useMemo(() => {
    const numbers = [];
    for (let i = 1; i <= last_page; i++) {
      numbers.push(i);
    }
    return numbers;
  }, [last_page]);

  const updatePage = (newPage) => {
    dispatch(setCompanyFilterParams({ page: newPage }));
  };

  return (
    <div className="flex items-center flex-wrap md:flex-row justify-between">
      <p className="text-sm text-gray-500">
        Showing{" "}
        <span className="font-semibold">
          {" "}
          {from}-{to}{" "}
        </span>{" "}
        of <span className="font-semibold">{total}</span>
      </p>
      <ul className="text-sm flex">
        <PaginationButton
          className="rounded-s-lg"
          title="Previous"
          disabled={isLoading || page == 1}
          onClick={() => updatePage(page - 1)}
        />

        {pageNumbers.map((pageNumber) => (
          <PaginationButton
            key={pageNumber}
            className={pageNumber === current_page ? "bg-gray-100" : ""}
            title={pageNumber}
            disabled={isLoading || pageNumber === current_page}
            onClick={() => updatePage(pageNumber)}
          />
        ))}

        <PaginationButton
          className="rounded-e-lg"
          title="Next"
          disabled={isLoading || page == last_page}
          onClick={() => updatePage(page + 1)}
        />
      </ul>
    </div>
  );
};

export default PaginationElement;
