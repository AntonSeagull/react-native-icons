

  import {
    G,
    Path,
    Svg,
    Line,
    Circle,
    Polyline
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const TbBrandGoogleDrive = (props: IconProps) => {

   const {
            size = 24,
            color = 'black',
            rotate = 0,
        } = props;

    return (
      <Svg
        viewBox="0 0 24 24"
        width={size}
        height={size}
        fill="none"
        transform={`rotate(${rotate}, 12, 12)`}
      >
        <G fill={color} stroke={color}>
          <Path  d="M12 10l-6 10l-3 -5l6 -10z" />
          <Path  d="M9 15h12l-3 5h-12" />
          <Path  d="M15 15l-6 -10h6l6 10z" />
        </G>
      </Svg>
    );
  }

