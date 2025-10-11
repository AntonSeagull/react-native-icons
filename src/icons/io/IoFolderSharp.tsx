

  import {
    G,
    Path,
    Svg,
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const IoFolderSharp = (props: IconProps) => {

   const {
            size = 24,
            color = 'black'
        } = props;

    return (
      <Svg
        viewBox="0 0 512 512"
        width={size}
        height={size}
        fill="none"
      >
        <G fill={color}>
          <Path d="M16,420a28,28,0,0,0,28,28H468a28,28,0,0,0,28-28V208H16Z" />
          <Path d="M496,124a28,28,0,0,0-28-28H212.84l-48-32H44A28,28,0,0,0,16,92v84H496Z" />
        </G>
      </Svg>
    );
  }

