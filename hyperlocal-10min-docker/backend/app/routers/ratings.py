from fastapi import APIRouter
router = APIRouter(prefix='/ratings')
@router.get('/')
def ok(): return {'router':'ratings'}
