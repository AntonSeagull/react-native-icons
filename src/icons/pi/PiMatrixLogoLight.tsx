

  import {
    G,
    Path,
    Svg,
    Line
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const PiMatrixLogoLight = (props: IconProps) => {

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
          <Path  d="M46,46V210H64a6,6,0,0,1,0,12H40a6,6,0,0,1-6-6V40a6,6,0,0,1,6-6H64a6,6,0,0,1,0,12ZM216,34H192a6,6,0,0,0,0,12h18V210H192a6,6,0,0,0,0,12h24a6,6,0,0,0,6-6V40A6,6,0,0,0,216,34ZM152,90a30,30,0,0,0-24,12,30,30,0,0,0-42-6v0a6,6,0,0,0-12,0v64a6,6,0,0,0,12,0V120a18,18,0,0,1,36,0v40a6,6,0,0,0,12,0V120a18,18,0,0,1,36,0v40a6,6,0,0,0,12,0V120A30,30,0,0,0,152,90Z" />
        </G>
      </Svg>
    );
  }

