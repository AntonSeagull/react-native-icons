

  import {
    G,
    Path,
    Svg,
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const BiLogoFlickrSquare = (props: IconProps) => {

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
          <Path d="M20 3H4a1 1 0 0 0-1 1v16a1 1 0 0 0 1 1h16a1 1 0 0 0 1-1V4a1 1 0 0 0-1-1zM8.747 14.746A2.745 2.745 0 1 1 11.494 12a2.744 2.744 0 0 1-2.747 2.746zm6.506 0a2.746 2.746 0 1 1-.001-5.493 2.746 2.746 0 0 1 .001 5.493z" />
        </G>
      </Svg>
    );
  }

