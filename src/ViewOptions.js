import ButtonGroup from 'react-bootstrap/ButtonGroup';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

import { TRACK, SEMESTER, SORT } from './constants';

export default function ViewOptions({
  semesterFilter,
  trackFilter,
  sortBy,
  setSemesterFilter,
  setTrackFilter,
  setSortBy,
}) {
  const generateButtons = (mapping, selected, setSelected) => {
    return Object.keys(mapping).map(key => {
      const value = mapping[key];
      return (
        <Button
          key={key}
          variant="secondary"
          disabled={selected === value}
          onClick={() => setSelected(value)}
        >
          {value}
        </Button>
      );
    });
  };

  return (
    <Card id="view-options">
      <div className="option-group">
        <span className="option-label">Semester Filter:</span>
        <ButtonGroup>
          {generateButtons(SEMESTER, semesterFilter, setSemesterFilter)}
        </ButtonGroup>
      </div>
      <div className="option-group">
        <span className="option-label">Concentration Track Filter:</span>
        <ButtonGroup>
          {generateButtons(TRACK, trackFilter, setTrackFilter)}
        </ButtonGroup>
      </div>
      <div className="option-group">
        <span className="option-label">Sort By:</span>
        <ButtonGroup>
          {generateButtons(SORT, sortBy, setSortBy)}
        </ButtonGroup>
      </div>
    </Card>
  );
}
