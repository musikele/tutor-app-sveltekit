export async function post( {body} ) {
    
    if (body.get('user') && body.get('password')) {
        console.log('here');
        return {
            status: 302,
            headers: {
                Location: '/dashboard',
            }
        }
    } else {
        return {
            status: 401,
            body: {
                logged: false
            }
        };
    }
}