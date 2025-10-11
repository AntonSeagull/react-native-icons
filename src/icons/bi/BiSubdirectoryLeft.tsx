

  import {
    G,
    Path,
    Svg,
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const BiSubdirectoryLeft = (props: IconProps) => {

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
          <Path d="M16 13h-6v-3l-5 4 5 4v-3h7a1 1 0 0 0 1-1V5h-2v8z" />
        </G>
      </Svg>
    );
  }

