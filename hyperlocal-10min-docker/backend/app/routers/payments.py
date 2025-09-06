from fastapi import APIRouter
router = APIRouter(prefix='/payments')
@router.get('/')
def ok(): return {'router':'payments'}
