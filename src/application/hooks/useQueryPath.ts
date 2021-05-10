import { useMemo, useCallback } from "react";
import { useHistory, useLocation } from "react-router-dom";
import { parse, ParseOptions, stringify } from "query-string";


/**
 * Returns an array with
 * - queryString: parsed querystring as an object
 * - setQueryString: function to set queryString with an object
 */
const useQueryPath = ( page?: string, options?: ParseOptions): any => {
  const history = useHistory();
  const location = useLocation();

  const queryString = useMemo(() => {
    return parse(location.search, options);
  }, [location, options]);

  const setQueryString = useCallback(
    (obj) => {
      page ? history.push(`/${page}?${stringify(obj, options)}`) :
      history.replace(`${location.pathname}?${stringify(obj, options)}`);
    },
    [history, location, options, page]
  );

  return [queryString, setQueryString];
};

export default useQueryPath;
