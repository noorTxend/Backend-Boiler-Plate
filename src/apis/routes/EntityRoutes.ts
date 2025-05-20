import { Router } from 'express';
import { EntityController } from '../controllers/EntityController';
import { ENTITY_ROUTES } from '../../common/constants/RoutesConstants';

const EntityRoutes = Router();

// Testing route
EntityRoutes.get(ENTITY_ROUTES.INDEX, EntityController.test);

export default EntityRoutes;
