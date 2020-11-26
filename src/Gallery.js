import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

export default function Gallery({
  items=[],
  shoppingCart=false,
  disabledItems=[],
  handleButtonClicked=()=>{},
}) {

  const itemCards = items.map(item => {
    const { id, name, image, courseCode, weeklyHours, semester, track } = item;
    const className = shoppingCart ? 'cart-course-card' : 'course-card';
    return (
      <Card key={id} className={className}>
        { !shoppingCart ? <Card.Img variant="top" src={image} /> : null }
        <Card.Body>
          <Card.Title>{`${courseCode}: ${name}`}</Card.Title>
          <Card.Text>{`Weekly Hours: ${weeklyHours}`}</Card.Text>
          <Card.Text>{`Semester Offered: ${semester}`}</Card.Text>
          <Card.Text>{`Concentration Track: ${track}`}</Card.Text>
          {!shoppingCart ? (
            <Button
              variant="primary"
              disabled={disabledItems.some(x => x.id === id)}
              onClick={() => handleButtonClicked(id)}
            >
              Add
            </Button>
          ) : (
            <Button variant="danger" onClick={() => handleButtonClicked(id)}>
              Remove
            </Button>
          )}
        </Card.Body>
      </Card>
    );
  });

  // if course gallery
  if (!shoppingCart) {
    return (
      <div className="gallery" id="course-gallery">
        {items ? itemCards : null}
      </div>
    );
  }
  
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
