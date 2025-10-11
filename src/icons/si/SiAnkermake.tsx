

  import {
    G,
    Path,
    Svg,
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const SiAnkermake = (props: IconProps) => {

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
          <Path d="m12.35 10.462 3.075 3.122c.187.187.187.42 0 .606l-3.122 3.123c-.186.186-.42.186-.606 0L8.575 14.19c-.187-.186-.187-.419 0-.606l3.169-3.122c.186-.186.419-.186.606 0Zm-1.585-1.584c.14.186.14.419-.047.605l-3.122 3.123c-.186.186-.419.186-.606 0l-1.724-1.724v12.675H0V.443h2.33l8.435 8.435ZM21.717.443H24v23.114h-5.266V10.882l-1.724 1.724c-.187.186-.42.186-.606 0l-3.122-3.123c-.187-.186-.187-.419 0-.605L21.717.443Z" />
        </G>
      </Svg>
    );
  }

