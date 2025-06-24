import Loading from "./Loading";

interface ListGenericProps<T>{
    list: T[] | undefined;
    children: React.ReactNode;
    listEmptyUI?: React.ReactNode;
    loadingUI?: React.ReactNode;
}


const ListGeneric = <T,>({
        list,children,listEmptyUI,loadingUI,
    }:ListGenericProps<T>): React.ReactElement => {
    if (!list) {
        return <>{loadingUI ?? <Loading/>}</>
    } else if (list.length === 0) {
        return <>{listEmptyUI ?? "No hay elementos que mostrar"}</>;
    } else {
        return <>{children}</>;
    }
};

export default ListGeneric