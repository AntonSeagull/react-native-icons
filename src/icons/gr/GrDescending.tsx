

  import {
    G,
    Path,
    Svg,
    Line,
    Circle,
    Polyline
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const GrDescending = (props: IconProps) => {

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
          <Path  d="M11.9191 16.7136L11.5655 17.0671L11.212 16.7136L7 12.5016L7.70711 11.7945L11.0655 15.1529V7.00009H12.0655V15.1529L15.4239 11.7945L16.1311 12.5016L11.9191 16.7136Z" fillRule="evenodd" clipRule="evenodd" />
        </G>
      </Svg>
    );
  }

