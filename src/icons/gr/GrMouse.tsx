

  import {
    G,
    Path,
    Svg,
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const GrMouse = (props: IconProps) => {

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
          <Path d="M12 4a5 5 0 015 5v6a5 5 0 01-10 0V9a5 5 0 015-5zm0 0v6m-6 0h12" />
        </G>
      </Svg>
    );
  }

