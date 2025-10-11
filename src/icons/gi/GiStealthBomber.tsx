

  import {
    G,
    Path,
    Svg,
    Line
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const GiStealthBomber = (props: IconProps) => {

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
          <Path  d="M256 32L20 400l60 64 52.1-75.9L176 432l50.5-50.5L256 448l29.5-66.5L336 432l43.9-43.9L432 464l60-64L256 32zm-9 47v78l-39-13 39-65zm18 0l39 65-39 13V79z" />
        </G>
      </Svg>
    );
  }

