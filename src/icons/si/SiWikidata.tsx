

  import {
    G,
    Path,
    Svg,
    Line
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const SiWikidata = (props: IconProps) => {

   const {
            size = 24,
            color = 'black',
            rotate = 0,
        } = props;

    return (
      <Svg
        viewBox="0 0 24 24"
        width={size}
        height={size}
        fill="none"
        transform={`rotate(${rotate}, 12, 12)`}
      >
        <G fill={color} stroke={color}>
          <Path  d="M0 4.583v14.833h.865V4.583zm1.788 0v14.833h2.653V4.583zm3.518 0v14.832H7.96V4.583zm3.547 0v14.834h.866V4.583zm1.789 0v14.833h.865V4.583zm1.759 0v14.834h2.653V4.583zm3.518 0v14.834h.923V4.583zm1.788 0v14.833h2.653V4.583zm3.64 0v14.834h.865V4.583zm1.788 0v14.834H24V4.583Z" />
        </G>
      </Svg>
    );
  }

