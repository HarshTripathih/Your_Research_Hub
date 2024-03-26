import { updateScholarProfileController } from "../controllers/scholarController";
import { requireSignIn } from "../middlewares/authMiddleware";



const router = express.Router();



router.put("/researcherprofile", requireSignIn, updateScholarProfileController);

export default router;