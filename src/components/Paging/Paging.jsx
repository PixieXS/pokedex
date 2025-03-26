export const Paging = ({
    totalElements = 0,
    limit = 10,
    page = 1,
    onPageChange = () => { },
    onLimitChange = () => { }
}) => {
    const totalPages = Math.ceil(totalElements / limit);

    return (
        <section className="pagingHolder">
            <section className="pagingParameters">
                <select value={limit} onChange={(e) => onLimitChange(Number(e.target.value))}>
                    <option value="10">10</option>
                    <option value="20">20</option>
                    <option value="50">50</option>
                    <option value="100">100</option>
                </select>
            </section>
            <section className="pagingInfo">
                <span>
                    Mostrando Página {page} de {totalPages}
                    <input
                        type="number"
                        min={1}
                        max={totalPages}
                        value={page}
                        onChange={(e) => {
                            if (e.target.value > 0 && e.target.value <= totalPages) {
                                onPageChange(e.target.value);
                            }
                        }}
                    />
                </span>
            </section>
            <section className="pagingNavigator">
                <button
                    onClick={() => {
                        if (page >= 1) {
                            onPageChange(page - 1)
                        }
                    }}
                >
                    Anterior
                </button>
                <button
                    onClick={() => {
                        if (page < totalPages) {
                            onPageChange(page + 1)
                        }
                    }}
                >
                    Siguiente
                </button>
            </section>
        </section>
    );
};