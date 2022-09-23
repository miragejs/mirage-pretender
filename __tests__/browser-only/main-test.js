import { fetchSanityCheckTest, passthroughTest }  from 'mirage-interceptor-test';
import PretenderInterceptor from 'mirage-pretender';

fetchSanityCheckTest('pretender', PretenderInterceptor);
passthroughTest('pretender', PretenderInterceptor);
