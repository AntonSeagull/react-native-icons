

  import {
    G,
    Path,
    Svg,
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const BiSolidRadio = (props: IconProps) => {

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
          <Path d="m20.249 5.025-7.897-2.962-.703 1.873L14.484 5H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V7c0-1.02-.766-1.851-1.751-1.975zM10 17H6v-2h4v2zm6.5 1a2.5 2.5 0 1 1 0-5 2.5 2.5 0 0 1 0 5zm3.5-7H4V7h16v4z" />
        </G>
      </Svg>
    );
  }

