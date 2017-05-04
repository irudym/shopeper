import FormSelectContainer from '../containers/form/form_select_container';
import withUrl from './with_url';

const SelectWithUrl = (url, token) => (withUrl(FormSelectContainer, url, token));

export default SelectWithUrl;
