import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

export default function Gallery({
  items=[],
  shoppingCart=false,
  disabledItems=[],
  handleButtonClicked=()=>{},
}) {
  // create a card for each gallery item
  const itemCards = items.map(item => {
    const { id, name, image, courseCode, weeklyHours, semester, track } = item;
    const className = shoppingCart ? 'cart-course-card' : 'course-card';
    const disabled = disabledItems.some(x => x.id === id);
    return (
      <Card key={id} className={className}>
        {shoppingCart ? null : <Card.Img variant="top" src={image} />}
        <Card.Body>
          <Card.Title>{`${courseCode}: ${name}`}</Card.Title>
          <Card.Text>{`Weekly Hours: ${weeklyHours}`}</Card.Text>
          <Card.Text>{`Semester Offered: ${semester}`}</Card.Text>
          <Card.Text>{`Concentration Track: ${track}`}</Card.Text>
          {shoppingCart ? (
            <Button variant="danger" onClick={() => handleButtonClicked(id)}>
              Remove
            </Button>
          ) : (
            <Button
              variant="primary"
              disabled={disabled}
              onClick={() => handleButtonClicked(id)}
            >
              {disabled ? 'Added' : 'Add'}
            </Button>
          )}
        </Card.Body>
      </Card>
    );
  });

  if (shoppingCart) {
    // if cart gallery, we need to calculate the total weekly hours
    const weeklyHours = items.map(x => x.weeklyHours);
    const totalWeeklyHours = weeklyHours.reduce((a, b) => a + b, 0);
    const formatted = `${totalWeeklyHours}`.length > 5
      ? `${totalWeeklyHours}`.substring(0, 5)
      : `${totalWeeklyHours}`;
    return (
      <Card id="cart-gallery">
        <h2>Shopping Cart</h2>
        <div className="gallery">
          {items ? itemCards : null}
        </div>
        <h4>Total Weekly Hours: {formatted}</h4>
      </Card>
    );
  }

  // else we are displaying the course gallery
  return (
    <Card id="course-gallery">
      <div className="gallery">
        {items ? itemCards : null}
      </div>
    </Card>
  );
}
