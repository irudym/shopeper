import FormSelectContainer from '../containers/form/form_select_container';
import withUrl from './with_url';

const SelectWithUrl = url => (withUrl(FormSelectContainer, url));

export default SelectWithUrl;
