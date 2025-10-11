

  import {
    G,
    Path,
    Svg,
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const TiWeatherWindy = (props: IconProps) => {

   const {
            size = 24,
            color = 'black'
        } = props;

    return (
      <Svg
        viewBox="0 0 24 24"
        width={size}
        height={size}
        fill="none"
      >
        <G fill={color}>
          <Path d="M19 5c-.553 0-1 .447-1 1s.447 1 1 1c.552 0 1 .448 1 1s-.448 1-1 1h-11c-.553 0-1 .447-1 1s.447 1 1 1h6c.552 0 1 .448 1 1s-.448 1-1 1h-6.4c-1.654 0-3 1.346-3 3s1.346 3 3 3c.553 0 1-.447 1-1s-.447-1-1-1c-.552 0-1-.448-1-1s.448-1 1-1h6.4c1.654 0 3-1.346 3-3 0-.353-.072-.686-.185-1h2.185c1.654 0 3-1.346 3-3s-1.346-3-3-3z" />
        </G>
      </Svg>
    );
  }

