

  import {
    G,
    Path,
    Svg,
    Line
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const GiIronCross = (props: IconProps) => {

   const {
            size = 24,
            color = 'black',
            rotate = 0,
        } = props;

    return (
      <Svg
        viewBox="0 0 512 512"
        width={size}
        height={size}
        fill="none"
        transform={`rotate(${rotate}, 256, 256)`}
      >
        <G fill={color} stroke={color}>
          <Path  d="M486 371.316V142.75a399.056 399.056 0 0 1-185.685 69.28 399.135 399.135 0 0 1 70.973-186.002H142.72A399.056 399.056 0 0 1 212 211.714 399.135 399.135 0 0 1 26 140.74V369.31a399.056 399.056 0 0 1 185.685-69.28 399.135 399.135 0 0 1-70.973 185.944H369.28A399.056 399.056 0 0 1 300 300.342a399.135 399.135 0 0 1 186 70.974z" />
        </G>
      </Svg>
    );
  }

