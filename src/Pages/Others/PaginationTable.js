import React, { useState } from 'react';

const data = Array.from({ length: 100 }, (_, i) => ({
    id: i + 1,
    name: `Item ${i + 1}`,
    price: (Math.random() * 100).toFixed(2)
}));

const PAGE_SIZE = 10;

const PaginationTable = () => {
    const [currentPage, setCurrentPage] = useState(1);

    // Calculate paginated data
    const startIndex = (currentPage - 1) * PAGE_SIZE;
    const paginatedData = data.slice(startIndex, startIndex + PAGE_SIZE);
    const totalPages = Math.ceil(data.length / PAGE_SIZE);

    return (
        <div className="p-4">
            <table className="w-full table-auto border-collapse border border-gray-300">
                <thead>
                    <tr className="bg-gray-200">
                        <th className="p-2 border">ID</th>
                        <th className="p-2 border">Name</th>
                        <th className="p-2 border">Price</th>
                    </tr>
                </thead>
                <tbody>
                    {paginatedData.map((item) => (
                        <tr key={item.id} className="text-center">
                            <td className="p-2 border">{item.id}</td>
                            <td className="p-2 border">{item.name}</td>
                            <td className="p-2 border">${item.price}</td>
                        </tr>
                    ))}
                </tbody>
            </table>

            {/* Pagination Controls */}
            <div className="flex justify-center items-center gap-2 mt-4">
                <button
                    className="px-3 py-1 border rounded bg-blue-500 text-white disabled:bg-gray-300"
                    onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
                    disabled={currentPage === 1}>
                    Prev
                </button>

                <span>
                    Page {currentPage} of {totalPages}
                </span>

                <button
                    className="px-3 py-1 border rounded bg-blue-500 text-white disabled:bg-gray-300"
                    onClick={() => setCurrentPage((prev) => Math.min(prev + 1, totalPages))}
                    disabled={currentPage === totalPages}>
                    Next
                </button>
            </div>
        </div>
    );
};

export default PaginationTable;
