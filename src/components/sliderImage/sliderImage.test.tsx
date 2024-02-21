import { render, screen } from "@testing-library/react"
import SliderImage from "."
import { BrowserRouter } from "react-router-dom";

test('name should be on page', () => {
  render(
    <BrowserRouter>
    <SliderImage link={""} serviceName={"test"} img={""} />
    </BrowserRouter>
  )
  expect(screen.getByText('test')).toBeInTheDocument();
})

