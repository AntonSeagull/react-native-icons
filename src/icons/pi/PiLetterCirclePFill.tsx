

  import {
    G,
    Path,
    Svg,
    Line
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const PiLetterCirclePFill = (props: IconProps) => {

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
          <Path  d="M156,116a20,20,0,0,1-20,20H112V96h24A20,20,0,0,1,156,116Zm76,12A104,104,0,1,1,128,24,104.11,104.11,0,0,1,232,128Zm-60-12a36,36,0,0,0-36-36H104a8,8,0,0,0-8,8v80a8,8,0,0,0,16,0V152h24A36,36,0,0,0,172,116Z" />
        </G>
      </Svg>
    );
  }

