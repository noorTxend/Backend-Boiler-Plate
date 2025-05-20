import { Router } from 'express';
import { HealthCheck } from '../health/HealthCheck';
import { ENTITY_NAME, HEALTH_CHECKS } from '../common/constants/RoutesConstants';
import EntityRoutes from './routes/EntityRoutes';

const router = Router();

// health checks
router.use(HEALTH_CHECKS.LIVE, HealthCheck.liveness);
router.use(HEALTH_CHECKS.READY, HealthCheck.readiness);
router.use(HEALTH_CHECKS.HEALTH, HealthCheck.health);

// Entity Routes
router.use(ENTITY_NAME.ENTITY, EntityRoutes);

export default router;
