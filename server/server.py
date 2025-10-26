from pathlib import Path
import sys

# add repo root to path
sys.path.append(str(Path(__file__).resolve().parents[1])) 

from shared.constants import FIELD_WIDTH_M
print("Field width in meters:", FIELD_WIDTH_M)