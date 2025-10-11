

  import {
    G,
    Path,
    Svg,
    Line
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const IoFolderOpenSharp = (props: IconProps) => {

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
          <Path  d="M16.08,189.4,44.66,423.27A28,28,0,0,0,72.52,448h367a28,28,0,0,0,27.86-24.73L495.92,189.4A12,12,0,0,0,484,176H28A12,12,0,0,0,16.08,189.4Z" />
          <Path  d="M464,124a28,28,0,0,0-28-28H244.84l-48-32H76A28,28,0,0,0,48,92v52H464Z" />
        </G>
      </Svg>
    );
  }

