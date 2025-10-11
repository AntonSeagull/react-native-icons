

  import {
    G,
    Path,
    Svg,
    Line
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const PiHashStraightFill = (props: IconProps) => {

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
          <Path  d="M112,112h32v32H112ZM224,48V208a16,16,0,0,1-16,16H48a16,16,0,0,1-16-16V48A16,16,0,0,1,48,32H208A16,16,0,0,1,224,48Zm-64,96V112h32a8,8,0,0,0,0-16H160V64a8,8,0,0,0-16,0V96H112V64a8,8,0,0,0-16,0V96H64a8,8,0,0,0,0,16H96v32H64a8,8,0,0,0,0,16H96v32a8,8,0,0,0,16,0V160h32v32a8,8,0,0,0,16,0V160h32a8,8,0,0,0,0-16Z" />
        </G>
      </Svg>
    );
  }

