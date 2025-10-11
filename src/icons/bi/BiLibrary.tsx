

  import {
    G,
    Path,
    Svg,
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const BiLibrary = (props: IconProps) => {

   const {
            size = 24,
            color = 'black'
        } = props;

    return (
      <Svg
        viewBox="0 0 24 24"
        width={size}
        height={size}
        fill="none"
      >
        <G fill={color}>
          <Path d="M7 3h2v18H7zM4 3h2v18H4zm6 0h2v18h-2zm9.062 17.792-6.223-16.89 1.877-.692 6.223 16.89z" />
        </G>
      </Svg>
    );
  }

