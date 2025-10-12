

  import {
    G,
    Path,
    Svg,
    Line,
    Circle,
    Polyline
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const PiLecternLight = (props: IconProps) => {

   const {
            size = 24,
            color = 'black',
            rotate = 0,
        } = props;

    return (
      <Svg
        viewBox="0 0 256 256"
        width={size}
        height={size}
        fill="none"
        transform={`rotate(${rotate}, 128, 128)`}
      >
        <G fill={color} stroke={color}>
          <Path  d="M244.51,121.74l-40-80A13.92,13.92,0,0,0,192,34H64a13.92,13.92,0,0,0-12.52,7.74l-40,80A14,14,0,0,0,24,142h98v68H96a6,6,0,0,0,0,12h64a6,6,0,0,0,0-12H134V142h98a14,14,0,0,0,12.52-20.26Zm-10.82,7.31a1.93,1.93,0,0,1-1.7.95H24a2,2,0,0,1-1.79-2.89l40-80A2,2,0,0,1,64,46H192a2,2,0,0,1,1.79,1.11l40,80A2,2,0,0,1,233.69,129.05ZM190,104a6,6,0,0,1-6,6H72a6,6,0,0,1,0-12H184A6,6,0,0,1,190,104Z" />
        </G>
      </Svg>
    );
  }

