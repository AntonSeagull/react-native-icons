

  import {
    G,
    Path,
    Svg,
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const SiStatuspage = (props: IconProps) => {

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
          <Path d="M12.008 9.597a5.623 5.623 0 1 1 0 11.245 5.623 5.623 0 0 1 0-11.245zM.154 8.717l3.02 3.574a.639.639 0 0 0 .913.068c4.885-4.379 10.97-4.379 15.84 0a.642.642 0 0 0 .916-.068l3.006-3.574a.646.646 0 0 0-.075-.906c-7.1-6.204-16.462-6.204-23.555 0a.65.65 0 0 0-.065.906z" />
        </G>
      </Svg>
    );
  }

