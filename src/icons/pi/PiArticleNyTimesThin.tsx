

  import {
    G,
    Path,
    Svg,
    Line
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const PiArticleNyTimesThin = (props: IconProps) => {

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
          <Path  d="M128,100H232a4,4,0,0,1,0,8H128a4,4,0,0,1,0-8Zm104,32H128a4,4,0,0,0,0,8H232a4,4,0,0,0,0-8Zm0,32H80a4,4,0,0,0,0,8H232a4,4,0,0,0,0-8Zm0,32H80a4,4,0,0,0,0,8H232a4,4,0,0,0,0-8ZM96,140a4,4,0,0,0,0-8H84V60h40V72a4,4,0,0,0,8,0V56a4,4,0,0,0-4-4H32a4,4,0,0,0-4,4V72a4,4,0,0,0,8,0V60H76v72H64a4,4,0,0,0,0,8Z" />
        </G>
      </Svg>
    );
  }

