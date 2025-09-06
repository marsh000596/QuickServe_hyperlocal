from fastapi import APIRouter
router = APIRouter(prefix='/jobs')
@router.get('/')
def ok(): return {'router':'jobs'}
