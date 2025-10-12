

  import {
    G,
    Path,
    Svg,
    Line,
    Circle,
    Polyline
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const PiNumpadThin = (props: IconProps) => {

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
          <Path  d="M76,48A12,12,0,1,1,64,36,12,12,0,0,1,76,48Zm52-12a12,12,0,1,0,12,12A12,12,0,0,0,128,36Zm64,24a12,12,0,1,0-12-12A12,12,0,0,0,192,60ZM64,92a12,12,0,1,0,12,12A12,12,0,0,0,64,92Zm64,0a12,12,0,1,0,12,12A12,12,0,0,0,128,92Zm64,0a12,12,0,1,0,12,12A12,12,0,0,0,192,92ZM64,148a12,12,0,1,0,12,12A12,12,0,0,0,64,148Zm64,0a12,12,0,1,0,12,12A12,12,0,0,0,128,148Zm0,56a12,12,0,1,0,12,12A12,12,0,0,0,128,204Zm64-56a12,12,0,1,0,12,12A12,12,0,0,0,192,148Z" />
        </G>
      </Svg>
    );
  }

