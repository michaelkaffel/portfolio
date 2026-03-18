import { useEffect } from 'react';

const BASE = 'Michael Kaffel';

const useDocumentTitle = (pageTitle) => {
    useEffect(() => {
        document.title = pageTitle ? `${pageTitle} | ${BASE}` : BASE;
    }, [pageTitle]);
}

export default useDocumentTitle;