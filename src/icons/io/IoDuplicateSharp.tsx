

  import {
    G,
    Path,
    Svg,
    Line
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const IoDuplicateSharp = (props: IconProps) => {

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
          <Path  d="M112,80H400V56a24,24,0,0,0-24-24H66A34,34,0,0,0,32,66V376a24,24,0,0,0,24,24H80V112A32,32,0,0,1,112,80Z" />
          <Path  d="M456,112H136a24,24,0,0,0-24,24V456a24,24,0,0,0,24,24H456a24,24,0,0,0,24-24V136A24,24,0,0,0,456,112ZM392,312H312v80H280V312H200V280h80V200h32v80h80Z" />
        </G>
      </Svg>
    );
  }

