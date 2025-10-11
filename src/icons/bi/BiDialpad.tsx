

  import {
    G,
    Path,
    Svg,
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const BiDialpad = (props: IconProps) => {

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
          <Path d="M10 3h4v3h-4zm0 5h4v3h-4zm0 5h4v3h-4zm6-10h4v3h-4zm0 5h4v3h-4zm0 5h4v3h-4zM4 3h4v3H4zm0 5h4v3H4zm0 5h4v3H4zm6 5h4v3h-4z" />
        </G>
      </Svg>
    );
  }

