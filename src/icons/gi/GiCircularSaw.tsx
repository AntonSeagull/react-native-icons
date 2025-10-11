

  import {
    G,
    Path,
    Svg,
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const GiCircularSaw = (props: IconProps) => {

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
          <Path d="M256 16v72H88l48 48L16 256h72v168l48-48 120 120v-72h168l-48-48 120-120h-72V88l-48 48L256 16zm0 120c66.274 0 120 53.726 120 120s-53.726 120-120 120-120-53.726-120-120 53.726-120 120-120zm1.406 72.03A48 48 0 0 0 208 256a48 48 0 0 0 96 0 48 48 0 0 0-46.594-47.97z" fill="#000" />
        </G>
      </Svg>
    );
  }

